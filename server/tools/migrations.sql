-- Create the "users" table with the "role" column
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(50) NOT NULL,
    height INT NOT NULL,
    weight INT NOT NULL,
    icon VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL -- Add the "role" column
);

-- Create the "activities" table
CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    duration INT NOT NULL,
    calories_burned INT NOT NULL,
    date TIMESTAMP NOT NULL,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

-- Create the "routes" table
CREATE TABLE routes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    distance FLOAT NOT NULL,
    duration INT NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    start_location VARCHAR(255) NOT NULL,
    end_location VARCHAR(255) NOT NULL
);

-- Insert data into the "users" table with the "role" column
INSERT INTO users (id, first_name, last_name, email, age, gender, height, weight, icon, role)
VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 30, 'male', 180, 75, '@/assests/John Doe.svg', 'user'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 28, 'female', 165, 60, '@/assests/Jane Smith.svg', 'user'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', 25, 'female', 170, 55, '@/assests/Alice Johnson.svg', 'user'),
(4, 'Admin', 'User', 'example@example.com', 0, 'male', 0, 0, '@/assests/admin.svg', 'admin');

-- Insert data into the "activities" table
INSERT INTO activities (id, name, type, duration, calories_burned, date, user_id)
VALUES
(1, 'Morning Yoga', 'Yoga', 30, 150, '2023-10-01T08:00:00Z', 1),
(2, 'Evening Run', 'Running', 45, 400, '2023-10-01T18:00:00Z', 2),
(3, 'Strength Training', 'Weightlifting', 60, 500, '2023-10-02T10:00:00Z', 3),
(4, 'HIIT Workout', 'High Intensity Interval Training', 30, 300, '2023-10-02T19:00:00Z', 1),
(5, 'Cycling', 'Cycling', 90, 600, '2023-10-03T07:00:00Z', 2),
(6, 'Pilates', 'Pilates', 45, 200, '2023-10-03T16:00:00Z', 3),
(7, 'Cardio Blast', 'Cardio', 30, 350, '2023-10-04T08:00:00Z', 1),
(8, 'Zumba Dance', 'Dance', 60, 400, '2023-10-04T19:00:00Z', 2),
(9, 'Core Workout', 'Core Training', 30, 250, '2023-10-05T10:00:00Z', 3),
(10, 'Full Body Stretch', 'Stretching', 20, 100, '2023-10-05T18:00:00Z', 1);

-- Insert data into the "routes" table
INSERT INTO routes (id, name, distance, duration, difficulty, description, start_location, end_location)
VALUES
(1, 'Hometown Walk', 4.7, 107, 'Moderate', 'A historic route through the heart of America, offering scenic views and cultural landmarks.', 'Nanuet, NY', 'New City, NY'),
(2, 'Near University Walk', 1.7, 38, 'Easy', 'A leisurely walk through the forest near the university campus, perfect for students and visitors.', 'SUNY New Paltz, NY', 'Mohonk Preserve Testimonial Gateway, NY'),
(3, 'Mountain Trail Adventure', 12.5, 240, 'Hard', 'A challenging mountain trail that offers breathtaking views and a true test of endurance.', 'Bear Mountain State Park, NY', 'Harriman State Park, NY'),
(4, 'City Park Loop', 3.2, 75, 'Easy', 'A relaxing loop through the city park, ideal for families and casual walkers.', '(South) Central Park, NY', '(North) Central Park, NY'),
(5, 'Riverside Trail', 5.0, 90, 'Moderate', 'A scenic riverside trail that offers a peaceful escape from the city hustle.', 'Hudson River Park, NY', 'Riverside Park, NY');