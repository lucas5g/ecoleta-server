import {Request, Response} from 'express'
import knex from '../database/connection'

class PointsController {

  async index(request: Request, response: Response){
    const {city, uf, items } = request.query

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()))

      
    let points = await knex('points')
    .join('point_items', 'points.id', '=','point_items.point_id')
    .whereIn('point_items.item_id', parsedItems)
    .where({city})
    .where({uf})
    .distinct('points.*')

    for(let r in points){
      points[r].items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', points[r].id)
    }

    return response.json(points)

  }

  async show(request: Request, response: Response){
    const {id} = request.params

    const point = await knex('points').where('id', id).first()
    console.log(point)

    if(!point)
      return response.status(400).json({message: 'Point not found'})

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)

    point.items = items
    return response.json(point)

    //return response.json({point, items})
    

  }

  async create(request: Request, response: Response) {

    const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body

    const trx = await knex.transaction()

    const point = {
      image: 'https://images.unsplash.com/photo-1578240597669-05ffd2cf91be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=347&q=80-fake', name, email, whatsapp, latitude, longitude, city, uf
    }

    const insertedIds = await trx('points').insert(point)
    /** */
    //const ids = [1]
    const point_id = insertedIds[0]
    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      }
    })

    await trx('point_items').insert(pointItems)

    await trx.commit()

    return response.json({id: point_id, ...point})
  }


}


export default PointsController