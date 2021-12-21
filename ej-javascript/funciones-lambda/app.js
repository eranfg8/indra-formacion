const series = [
    { titulo: 'Serie 1', vista: true, numEpisodios: 30 },
    { titulo: 'Serie 2', vista: true, numEpisodios: 180 },
    { titulo: 'Serie 3', vista: false, numEpisodios: 270 },
    { titulo: 'Serie 4', vista: true, numEpisodios: 12 },
    { titulo: 'Serie 5', vista: false, numEpisodios: 89 },
    { titulo: 'Serie 6', vista: true, numEpisodios: 47 },
]

const seriesVistas = series.filter((serie) => {
    return serie.vista
})
console.log(seriesVistas)



const titulosSeriesVistas = seriesVistas.map(serie => serie.titulo).join(', ')
console.log(titulosSeriesVistas)

const seriesVistas2 = series.map(serie => {
    if (serie.vista) {
        return serie.titulo
    }
})
console.log(seriesVistas2)

//.find() devuelve el primer valor que cumple dicha condicion
const serieMuyLarga = series.find(serie => serie.numEpisodios > 100)
console.log({ serieMuyLarga })


const maxNumEpisodios = Math.max(...series.map(series => series.numEpisodios))
console.log({ maxNumEpisodios })

const serieConMasEpisodios = series.find(serie => serie.numEpisodios === maxNumEpisodios)
console.log({ serieConMasEpisodios })



const seriesMas100Episodios = series.filter((serie) => {
    return serie.numEpisodios > 100
})
console.log({ seriesMas100Episodios })



const numTotalEpisodiosVistos = series.reduce((acc, serie) => {
    const num = serie.vista ? serie.numEpisodios : 0
    return acc += num
}, 0)
console.log({ numTotalEpisodiosVistos })


const nuevasSeries = [].concat(series)