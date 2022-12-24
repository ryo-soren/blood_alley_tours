class CreateContactRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_requests do |t|
      t.string :email
      t.text :body

      t.timestamps
    end
  end
end
