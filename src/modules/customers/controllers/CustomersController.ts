import { Request, Response } from "express";
import CreateCustomerService from "../services/CreateCustomerService";
import ListCustomerService from "../services/ListCustomerService";
import ShowCustomerService from "../services/ShowCustomerService";


export default class CustomersController{
    public async index(requst:Request, responde: Response): Promise<Response>{
        const listCustomers = new ListCustomerService();

        const customers = await listCustomers.execute();

        return responde.json(customers);
    }

    public async show(request:Request, response:Response): Promise<Response>{
        const {id} = request.params;

        const showCustomer = new ShowCustomerService();

        const customers = await showCustomer.execute({id});

        return response.json(customers);
    }

    public  async create(request:Request, response:Response): Promise<Response>{
        const {name, email} = request.body;

        const createCustomer = new CreateCustomerService();

        const customer = await createCustomer.execute({
            name, 
            email
        })

        return response.json(customer);
    }
}