# Python

* [Tuples](#tuples)

## <a name="tuples">Tuples

---

A tuple comprises of set of comma-separated objects encapsulated inside the 
parentheses. The following can be described as a tuple:

    tuple1 = (230, "James", 123)   
    tuple2 = ("red", "green", "blue")


We can also create tuples without using the parenthesis. A sequence of values 
separated by comma will create a tuple.

    a = 3, 4, 5, 6
    print(type(a)) # <class 'tuple'>


Just like lists, tuples also have negative indexing starting from the most 
right (-1) to the most left. For Example:

    tuple1= ("apple", "orange", "lemon") 
    print(tuple1[-1]) # 'lemon'

### Tuple Unpacking

    lax_coords = (33.9, -118.4) # tuple
    latitude, longiude = lax_coords # unpacking
    print(latitude) # 33.9

### Grabbing excess items

    a, b, *rest = range(5)
    print(a) # 0
    print(b) # 1
    print(rest) # 2, 3, 4

### Changing Tuple Values

As we know that tuples are immutable, means that we cannot change the values 
inside a tuple. However, we can convert a tuple into a list and then change 
the values of that list and again change the particular list into a tuple 
again. For Example:
  
    tuple1= ("apple", "orange", "lemon") 
    tuple2 = list(tuple1) 
    tuple2[1] = "banana" 
    tuple1 = tuple(tuple2) 
    print(tuple1) # ('banana','orange','lemon')


### Named Tuples

    from collections import namedtuple

    City = namedtuple('City', 'name country population coordinates')
    tokyo = City('Tokyo', 'JP', 36.933, (35, 139))
    print(tokyo.country)


