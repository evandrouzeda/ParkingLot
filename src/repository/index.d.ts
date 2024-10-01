export default interface Repository {
    create(collection: string, data: any): Promise<any>;
    read(collection: string, id: string): Promise<any[]>;
    readMany(collection: string, query?: any): Promise<any[]>;
    update(collection: string, id: string, data: any): Promise<any>;
    delete(collection: string, id: string): Promise<any>;
}