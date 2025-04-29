-- Create the "users" table with the "role" column
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
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
    caloriesBurned INT NOT NULL,
    date TIMESTAMP NOT NULL,
    userId INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
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
INSERT INTO activities (id, name, type, duration, caloriesBurned, date, userId)
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
(10, 'Full Body Stretch', 'Stretching', 20, 100, '2023-10-05T18:00:00Z', 1),
(11, 'Trail Hiking', 'Hiking', 120, 700, '2023-10-06T07:00:00Z', 2),
(12, 'Boxing Training', 'Boxing', 45, 450, '2023-10-06T16:00:00Z', 3),
(13, 'Swimming Laps', 'Swimming', 60, 500, '2023-10-07T08:00:00Z', 1),
(14, 'Rock Climbing', 'Climbing', 90, 600, '2023-10-07T18:00:00Z', 2),
(15, 'Dance Cardio', 'Dance Cardio', 45, 350, '2023-10-08T10:00:00Z', 3),
(16, 'Meditation Session', 'Meditation', 30, 50, '2023-10-08T19:00:00Z', 1),
(17, 'CrossFit Workout', 'CrossFit', 60, 550, '2023-10-09T07:00:00Z', 2),
(18, 'Yoga Flow', 'Yoga', 45, 200, '2023-10-09T16:00:00Z', 3),
(19, 'Running Intervals', 'Running', 30, 400, '2023-10-10T08:00:00Z', 1),
(20, 'Strength Circuit', 'Weightlifting', 60, 500, '2023-10-10T18:00:00Z', 2),
(21, 'Pilates Core', 'Pilates', 45, 200, '2023-10-11T10:00:00Z', 3),
(22, 'Cycling Endurance', 'Cycling', 90, 600, '2023-10-11T19:00:00Z', 1),
(23, 'HIIT Cardio', 'High Intensity Interval Training', 30, 300, '2023-10-12T08:00:00Z', 2),
(24, 'Core Strengthening', 'Core Training', 30, 250, '2023-10-12T18:00:00Z', 3),
(25, 'Full Body Workout', 'Full Body', 60, 500, '2023-10-13T10:00:00Z', 1),
(26, 'Zumba Fitness', 'Dance', 60, 400, '2023-10-13T19:00:00Z', 2),
(27, 'Boxing Conditioning', 'Boxing', 45, 450, '2023-10-14T08:00:00Z', 3),
(28, 'Swimming Technique', 'Swimming', 60, 500, '2023-10-14T18:00:00Z', 1),
(29, 'Trail Running', 'Running', 45, 400, '2023-10-15T10:00:00Z', 2),
(30, 'Yoga Meditation', 'Yoga', 30, 150, '2023-10-15T19:00:00Z', 3);

-- Insert data into the "routes" table
INSERT INTO routes (id, name, distance, duration, difficulty, description, start_location, end_location)
VALUES
(1, 'Hometown Walk', 4.7, 107, 'Moderate', 'A historic route through the heart of America, offering scenic views and cultural landmarks.', 'Nanuet, NY', 'New City, NY'),
(2, 'Near University Walk', 1.7, 38, 'Easy', 'A leisurely walk through the forest near the university campus, perfect for students and visitors.', 'SUNY New Paltz, NY', 'Mohonk Preserve Testimonial Gateway, NY'),
(3, 'Mountain Trail Adventure', 12.5, 240, 'Hard', 'A challenging mountain trail that offers breathtaking views and a true test of endurance.', 'Bear Mountain State Park, NY', 'Harriman State Park, NY'),
(4, 'City Park Loop', 3.2, 75, 'Easy', 'A relaxing loop through the city park, ideal for families and casual walkers.', '(South) Central Park, NY', '(North) Central Park, NY'),
(5, 'Riverside Trail', 5.0, 90, 'Moderate', 'A scenic riverside trail that offers a peaceful escape from the city hustle.', 'Hudson River Park, NY', 'Riverside Park, NY');