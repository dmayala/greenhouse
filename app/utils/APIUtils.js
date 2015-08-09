import Promise from 'bluebird';
import request from 'superagent';

Promise.promisifyAll(request);

const endpoint = '/api/wines';

export default {

  async loadWine(id) {
    try {
      let wine = await request.get(`${endpoint}/${id}`)
                              .endAsync();
      return wine.body;
    } catch (err) {
      throw new Error(err);
    }
  },

  async loadWines() {
    try {
      let wines = await request.get(endpoint)
                               .endAsync();
      return wines.body;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },

  async addWine(wine, image) {
    try {
      let form = new FormData();
      Object.keys(wine).forEach((key) => {
        form.append(key, wine[key]);
      });

      if (image) {
        form.append('file', image);
      }

      let data = await request.post(endpoint)
                              .send(form)
                              .endAsync();

      return data.body;
    } catch (err) {
      throw new Error(err);
    }
  },

  async updateWine(id, wine, image) {
    try {
      let form = new FormData();
      Object.keys(wine).forEach((key) => {
        form.append(key, wine[key]);
      });

      if (image) {
        form.append('file', image);
      }

      let data = await request.put(`${endpoint}/${id}`)
                              .send(form)
                              .endAsync();
      return data.body;
    } catch (err) {
      throw new Error(err);
    }
  },

  async removeWine(id) {
      let data = await request.del(`${endpoint}/${id}`)
                              .endAsync();
      return data.body;
  }
}
