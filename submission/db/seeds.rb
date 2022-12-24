Booking.destroy_all

20.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    party_size = rand(2..5)
    tax = 1.12
    time = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]
    Booking.create(
        first_name: first_name,
        last_name: last_name,
        phone_number: Faker::PhoneNumber.cell_phone,
        email: "#{first_name}@#{last_name}.com",
        party_size: party_size,
        price: party_size * 12.50 * tax,
        date: Faker::Date.between(from: '2023-06-01', to: '2023-09-30'),
        time: time.sample
    )
end

bookings = Booking.all
puts "#{bookings.count} bookings created"