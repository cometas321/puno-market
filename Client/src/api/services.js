import axios from "axios";

export class ApiClient {
  client;

  constructor() {
    const headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };

    // Verificar si hay un token en el localStorage
    const token = localStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    this.client = axios.create({
      baseURL: import.meta.env.VITE_BACKEND,
      headers: headers,
    });
  }

  //si quisieras hacer otra petición cualquiera la harias asi, solo cambia el verbo http y el endpoint que nos brinde el backend
  async login(formLog) {
    return this.client.post(`/api/user/login`, formLog);
  }

  async log() {
    return this.client.get(`api/user/profile`);
  }

  async register(formLog) {
    return this.client.post(`/api/user/register`, formLog);
  }

  async getAllProductos() {
    return this.client.get(`/api/product/list_products/`);
  }
}
