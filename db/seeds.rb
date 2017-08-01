# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


def makeRowOfSquares(y)
  100.times do |i|
    x = (10 * i)
    Square.create({x: x, y: y})
    i += 1
  end
end

def makeGridOfSquares
  100.times do |i|
    y = (10 * i)
    makeRowOfSquares(y)
    i += 1
  end
end

makeGridOfSquares
