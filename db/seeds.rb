# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  galleries = Gallery.create(
    [
      { title: 'Reina Sofia Museum', city: "Madrid", price: 20 },
      { title: 'Samsung Museum of Art Wars', city: "Seul", price: 30 },
      { title: 'Museum of Modern Art', city: "New York City", price: 15 }
    ]
  )

  artists = User.create(
    [
      { name: 'Pablo Picasso', email: 'picasso@gmail.com', password: '000000' },
      { name: 'Jackson Pollock', email: 'jp@yahoo.com', password: '999999999' },
      { name: 'Mark Rothko', email: 'mrothko@gmail.com', password: '888888888' },
      { name: 'Lyubov Popova', email: 'lulu@yandex.ru', password: '777777777' },
      { name: 'Kazimir Malevich', email: 'mr.blacksquare@gmail.com', password: '111111111' },
      { name: 'Willem de Kooning', email: 'kooning@mail.ru', password: '222222222' }
    ]
  )

  Painting.create(title: 'Guernica', year: 1937, style: 'Cubism', artist_id: 1, gallery_id: 1)
  Painting.create(title: 'Untitled (Black and Orange on Red)', year: 1962, style: 'Abstract expressionism', artist_id: 3, gallery_id: 2)
  Painting.create(title: 'Untitled (Orange, Plum, Yellow)', year: 1950, style: 'Abstract expressionism', artist_id: 3, gallery_id: 1)
  Painting.create(title: 'Woman in Blue', year: 1901, style: "Impressionism", artist_id: 1, gallery_id: 1)
  Painting.create(title: 'One: Number 31', year: 1950, style: "Abstractionism", artist_id: 2, gallery_id: 3)
  Painting.create(title: 'Painterly architectonic', year: 1917, style: 'Abstractionism', artist_id: 4, gallery_id: 3)
  Painting.create(title: 'Painterly realism of a boy with a knapsack color masses in the 4th dimension', year: 1915, style: 'Suprematism', artist_id: 5, gallery_id: 3)
  Painting.create(title: 'Untitled XIV 1975', year: 1975, style: 'Abstract expressionism', artist_id: 6, gallery_id: 2)
  Painting.create(title: 'Pencils', year: 1918, style: 'Suprematism', artist_id: 5, gallery_id: 1)
