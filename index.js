const booksData = {
    "books": [
        {
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "year_published": 1951,
            "genres": ["Fiction", "Classics"],
            "available": true
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "year_published": 1960,
            "genres": ["Fiction", "Classics"],
            "available": false
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "year_published": 1949,
            "genres": ["Fiction", "Dystopian", "Science Fiction"],
            "available": true
        }
    ]
};

console.log(booksData.books[2]["title"], booksData.books[2].title,
    booksData["books"][2]["title"]
)
console.log(booksData.books[2].genres[0])

for(let x = 0; x <10; x++){
    console.log("하나씩",x)
}



const countlist = ["a","b","c"];
for (x in countlist) {
    console.log(`${x}번째의 값은 $(countlist[x])입니다.`)
}

const countobj = {
    "이름" : "돌돌이",
    "나이" : 7
}
for (x in countobj) {
 console.log(`${x}은 $(countobj[x]입니다.`)
}




