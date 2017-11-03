# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x] Include at least one has_many relationship (Artist has_many Paintings, Gallery has_many Paintings)
- [x] Include at least one belongs_to relationship (Paintings belongs_to Gallery, Paintings belongs_to Artist)
- [x] Include at least one has_many through relationship (Artist has_many Galleries :through Paintings, Gallery has_many Artists :through Paintings)
- [x] The "through" part of the has_many through includes at least one user submittable attribute (paintings.style, paintings.year, paintings.name)
- [x] Include reasonable validations for simple model objects (Artist(User), Painting, Gallery)
- [x] Include a class level ActiveRecord scope method (Gallery.sort_by_city, Gallery.sort_by_style, URL: /galleries)
- [x] Include a nested form writing to an associated model using a custom attribute writer (URL: galleries/new, Painting)
- [x] Include signup (Devise)
- [x] Include login (Devise)
- [x] Include logout (Devise)
- [x] Include third party signup/login (OmniAuth)
- [x] Include nested resource show or index (URL: artists/2/paintings)
- [x] Include nested resource "new" form (URL: /galleries/1/paintings/new)
- [x] Include form display of validation errors (URLs: /galleries/1/paintings/new, /galleries/new)

Confirm:
- [x] The application is pretty DRY
- [x] Limited logic in controllers
- [x] Views use helper methods if appropriate
- [x] Views use partials if appropriate
