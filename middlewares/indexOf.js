const schema = require("json-gate").createSchema(
    require("../schemas/index_request.json")
  );
  
  const IndexOf = {
    getIndex(req, res, next) {
      // validacion de datos de entrada
      schema.validate(req.body, (err, result) => {
        if (err) {
          res.status(422).send({
            data: {
              error: err.message
            }
          });
          next(err);
        } else {
          //const arreglo = [1, 2, 3, 6, 8, 10, 11, 13];
          const arreglo = req.body.array
          const indice = req.body.numero
  
          const numberPosition = (arr, element) => {
            let pos = -1;
  
            for (let i = 0; i <= arr.length; i++) {
              if (arr[i] === element) {
                pos = i;
              }
            }
  
            if (pos !== -1) {
              return `la posicion de ${element} esta en el indice ${pos}`;
            } else {
              return "No se econtraron coincidencias";
            }
          };
  
          res.status(200).send({
            data: {
              response: numberPosition(arreglo, indice),
            }
          });
        }
      });
    }
  };
  
  module.exports = IndexOf;
  