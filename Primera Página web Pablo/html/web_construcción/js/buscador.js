const buscar=document.getElementById("search");
async function search() {
           // Obtiene la palabra ingresada por el usuario y la convierte a minúsculas
           const query = document.getElementById('searchQuery').value.trim().toLowerCase();
           const resultadoDiv = document.getElementById('resultado');

           // Limpia el resultado previo
           resultadoDiv.innerHTML = '';

           // Lista de palabras clave permitidas
           const palabrasClavePermitidas = ["crepe" ,"crepe del bosque", "crepe fresoso", "crepe con almendras","crepe clásico","crepe saludable","crepe vacío","crepe italiano","crepe almendrado","crepe meloso","crepe con jamón york",
                                            "aquarius","agua","cerveza","vino","fanta",
                                            "gofre","gofre exótico","gofre vacío","gofre helado","gofre de espinacas","bomba de chocolate",
                                            "tortitas","tortitas con mantequilla","tortitas americanas","tortitas día del padre","tortitas simples","variado de tortitas",
                                            "tazón saludable","tarta de queso","queso","tarta de la abuela","volcán de chocolate",
                                            "saludable","clásico","vacío","chocolate","tarta"];
           // Verifica si la palabra ingresada es una de las palabras clave permitidas
           if (!palabrasClavePermitidas.some(palabra => palabra.toLowerCase() === query)) {
            resultadoDiv.style.backgroundColor="lightgoldenrodyellow";
            resultadoDiv.innerHTML = `La palabra "${query}" no está permitida. Las palabras permitidas son: ${palabrasClavePermitidas.join(", ")}.`;
            return;
        } else resultadoDiv.style.backgroundColor="pink";
         /*  if (!palabrasClavePermitidas.includes(query)) {
               resultadoDiv.innerHTML = `La palabra "${query}" no está permitida. Las palabras permitidas son: ${palabrasClavePermitidas.join(", ")}.`;
               return;
           }*/

           // Lista de archivos HTML a cargar y buscar
           const archivos = ['crepes.html', 'gofres.html', 'bebidas.html', 'tortitas.html', 'postres.html']; // Reemplaza con tus archivos HTML

           try {
               let palabraEncontrada = false;

               for (let archivo of archivos) {
                   // Carga el archivo HTML
                   const response = await fetch(archivo);
                   if (!response.ok) throw new Error(`No se pudo cargar el archivo ${archivo}`);
                   const htmlText = await response.text();

                   // Parsea el HTML
                   const parser = new DOMParser();
                   const doc = parser.parseFromString(htmlText, 'text/html');

                   // Busca la palabra específica en todos los elementos
                   //const elementos = doc.body.getElementsByTagName('*');
                   const elementos = doc.body.getElementsByTagName("article");
                    var cont=0;
                   // Supongamos que 'elementos' es la colección de todos los elementos <article> que deseas buscar
                      /*  for (let elem of elementos) {
                            // Convierte el texto a minúsculas y divide en palabras
                            const palabras = elem.textContent.toLowerCase().split(/\s+/);

                            // Verifica si alguna de las palabras en 'palabrasClavePermitidas' está en 'palabras'
                            if (palabras.some(palabra => palabrasClavePermitidas.includes(palabra))) {
                                // Clona el elemento para evitar modificar el original
                                const clonedElem = elem.cloneNode(true);

                                // Resalta la palabra encontrada en el contenido clonado
                                const regex = new RegExp(`\\b(${query})\\b`, 'gi');
                                clonedElem.innerHTML = clonedElem.innerHTML.replace(regex, '<span class="highlight">$1</span>');

                                // Añade el elemento clonado al resultado
                                resultadoDiv.innerHTML += `<h3>Resultado:</h3>`;
                                resultadoDiv.appendChild(clonedElem);
                            }
                        }*/

                   for (let elem of elementos) {
                       cont=cont+1;
                       // Convierte el texto a minúsculas y divide en palabras
                       const palabras = elem.textContent.toLowerCase();
                        //alert(cont+"Palabras "+palabras+" elem.textContent:"+elem.textContent);
                       if (palabras.includes(query)) {
                           //alert("Copiando "+elem.textContent);
                           // Clona el elemento para evitar modificar el original
                           const clonedElem = elem.cloneNode(true);

                           // Resalta la palabra encontrada
                           const regex = new RegExp(`\\b(${query})\\b`, 'gi');
                           clonedElem.innerHTML = clonedElem.innerHTML.replace(regex, '<span class="highlight">$1</span>');
                           palabraEncontrada = true;
                           // Añade el elemento clonado al resultado y detiene la búsqueda en más archivos
                           if (palabraEncontrada == false)
                              resultadoDiv.innerHTML = `<h3>Resultado:</h3>`;
                           resultadoDiv.append(clonedElem);
                           resultadoDiv.style.display="flex";
                           resultadoDiv.style.flexWrap="wrap";
                           resultadoDiv.style.justifyContent="center";
                           palabraEncontrada = true;
                       }
                   }

                   // Si se encontró la palabra en este archivo, detén la búsqueda en más archivos
                   
               }

               // Si no se encontró la palabra en ningún archivo
               if (!palabraEncontrada) {
                   resultadoDiv.innerHTML = `No se encontró la palabra "${query}" en ninguno de los archivos.`;
               }
           } catch (error) {
               resultadoDiv.innerHTML = 'Error al cargar los archivos o buscar la palabra';
               console.error('Error:', error);
           }
}
buscar.addEventListener("click",search);