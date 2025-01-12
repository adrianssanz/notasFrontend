
export interface Nota {
    id: number;
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    estado: Estado;
    usuario: Usuario;
}

export interface Estado{
    id: number;
    estado: string;
}

export interface Usuario {
    id: number;
    usuario: string;
    email: string;
 }