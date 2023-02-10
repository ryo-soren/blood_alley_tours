class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email
      t.integer :party_size
      t.integer :price
      t.string :date
      t.string :time
      t.string :charge_id
      t.string :charge_status
      t.timestamps
    end
  end
end
