
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

export interface Role{
    id: number;
    rol: string;
}

export interface Respuesta{
    totalItems: number;
    notas: Nota[];
    totalPaginas: number;
    paginaActual: number;
}

export interface Usuario {
    id: number;
    usuario: string;
    email: string;
    rol: Role;
 }