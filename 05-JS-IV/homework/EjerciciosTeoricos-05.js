1- Objetos: Son un conjunto de propiedades ordenados, no con indices como las matrices de los arrays, sino con 
una paridad key : value (clave : valor). De esta forma si se quiere acceder al valor de cierta propiedad se debe
tener en cuenta el nombre (clave) de esta misma. Muy importante: los pares clave/valor deben estar separados por 
comas(,), no por punto y coma(;). Casi todo en Javascript son objetos.
2- Propiedades: Propiedades es la forma de llamar a las claves que tendran un valor asignado. Vendrian a ser como 
los indices ([0, 1, 2, 3, etc]) de los arrays.
3- Métodos: Es la denominacion que se le da a las funciones que se encuentran dentro de los objetos.
4- Bucle `for…in`: Como los objetos no tienen indices numericos como los arrays, no podemos utilizar el bucle 
for para buscar elementos dentro del objeto. Entonces se utiliza otro bucle con una ligera diferencia, el bucle
for...in. Este tiene, entre parentesis, la variable que buscamos, y va a iterar por todas las propiedades hasta dar
	con la clave que deseamos y devolver, si asi se lo pide, los valores que posea.
5- Notación de puntos vs notación de corchetes: Estas son dos notaciones para escribir objetos. Se llaman en la gerga
'dot notation' y 'bracket notation' respectivamente. Las dot notation se escriben separando el objeto de la 
propiedad utilizando un punto (dot). Ej: objeto.propiedad(). Ahora, las bracket notation se escriben separando
al objeto de la propiedad por medio de corchetes (brackets). Ej: objeto[propiedad].