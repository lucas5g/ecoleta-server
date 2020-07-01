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

    const serializedPoints = points.map(point => {
      return{
        ...point,
        image: `http://192.168.0.28:8000/uploads/${point.image}`
      }
    })

    return response.json(serializedPoints)

  }

  async show(request: Request, response: Response){
    const {id} = request.params

    const point = await knex('points').where('id', id).first()
    console.log(point)

    if(!point)
      return response.status(400).json({message: 'Point not found'})

    const serializedPoints = {
      ...point,
      image: `http://192.168.0.28:8000/uploads/${point.image}`,
      items: await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
    }

    return response.json(serializedPoints)

    //return response.json({point, items})
    

  }

  async create(request: Request, response: Response) {

    const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body
    
    const trx = await knex.transaction()
    
    const point = {
      image: request.file.filename, name, email, whatsapp, latitude, longitude, city, uf
    }
    
    //return response.json(point)

    const insertedIds = await trx('points').insert(point)
    //const ids = [1]
    const point_id = insertedIds[0]
    const pointItems = items
      .split(',')  
      .map((item: string ) => Number(item.trim()))
      .map((item_id: number) => {
        return {
          item_id,
          point_id,
        }
      })

    await trx('point_items').insert(pointItems)

    await trx.commit()

    return response.json({id: point_id, ...point})
    /** */
  }


}


export default PointsController