require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'returns a list of apartments' do
     user = User.where(email:'test@test.com').first_or_create(password:'123testing', password_confirmation:'123testing')

     user.apartments.create(
      street: '42 Waluby Way',
      city: 'Sidney',
      state: 'Austrilia',
      manager: 'P Sherman',
      email: 'sherman@apartments.com',
      price: '$3500',
      bedrooms: 4,
      bathrooms: 2,
      pets: 'fish welcome!',
     )
     get '/apartments'
     apartments = JSON.parse(response.body)
     expect(response).to have_http_status(200)
     expect(apartments.length).to eq(1)
    end
  end
end
