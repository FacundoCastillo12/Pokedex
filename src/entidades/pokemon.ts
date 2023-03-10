export default class Pokemon {
  id: number;

  nombre: string;

  experiencia: number;

  imagen: string;

  altura: number;

  peso: number;

  tipo: string;

  constructor(
    id: number,
    nombre: string,
    experiencia: number,
    imagen: string,
    altura: number,
    peso: number,
    tipo: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.experiencia = experiencia;
    this.imagen = imagen;
    this.altura = altura;
    this.peso = peso;
    this.tipo = tipo;
  }
}
