require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it 'is valid with valid attributes' do
    # I will need to run a create for active record and store it as a variable
    user1 = User.create(email: 'test@test.com', password: '123testing')
    apartment = Apartment.create(street: '42 Walaby Way', city: 'Sydney', state: 'Australia', manager: 'P. Sherman', email: 'findingnemo@dentist.com', price: '10 fish', bedrooms: 3, bathrooms: 1, pets: 'fish', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYL5xCp-hiedGqNFd-Xn-Pd7RPD_Q-A6wUZs6xKAwSW4t9u6Ja0eTkNnxmnySLtmT0bg&usqp=CAU', user_id: user1.id)
    # Now I want to assert against it
    expect(apartment).to be_valid
  end
end
