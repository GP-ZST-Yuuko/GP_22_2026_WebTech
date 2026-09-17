function Tablica(){

    let tab = [
        {id: 1, name: "Pierwszy", category: "cosik" },
        {id: 2, name: "Drugi", category: "ktosik" },
        {id: 3, name: "Trzeci", category: "gdziesik" },
    ]

    return(
        <>
            <p>Pierwszy: {tab[0].name}</p>
            <p>Drugi: {tab[1].id}</p>
            <p>Trzeci: {tab[2].category}</p>
        </>
    )
}

export default Tablica;