const schema = require("json-gate").createSchema(
    require("../schemas/fibonacci_request")
  );
  
  const Fibo = {
    getFibo(req, res, next) {
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
          const number = req.body.indice;
          let time_start;
          let time_end;
          // funcion que encuentra el valor del numero fibonacci dando un indice.
          const fibonacci = numero => {
            /* El método process.hrtime () devuelve el tiempo real de alta resolución actual 
                en una matriz [segundos, nanosegundos], donde nanosegundos es la parte restante del 
                tiempo real que no se puede representar con una segunda precisión. */
            time_start = process.hrtime();
            const arr = [0, 1];
  
            for (let i = 2; i <= numero; i++) {
              let a = arr[i - 1];
              let b = arr[i - 2];
              arr.push(a + b);
            }
  
            time_end = process.hrtime(time_start);
            return `indice ${numero}: numero fib = ${arr[numero]}`;
          };
  
          res.status(200).send({
            data: {
              response: fibonacci(number),
              time_response: time_end[1] / 1000000
            }
          });
        }
      });
    }
  };
  
  module.exports = Fibo;
  