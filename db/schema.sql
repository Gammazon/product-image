DROP DATABASE IF EXISTS gammazon;

CREATE DATABASE gammazon;
USE gammazon;

CREATE TABLE products
(
id int
NOT NULL AUTO_INCREMENT,
    product VARCHAR
    (150),
    price decimal(10, 2) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products
    (id, product, price)
VALUES
    (1, "Nestle Pure Life
Purified Water, 16.9 fl oz. Plastic Bottles
(12 count)", 2.23);

INSERT INTO products
    (id, product, price)
VALUES
    (2, "MIRA SAFETY Hazmat
Suit Disposable Protective Coverall NFPA certified
with Respirator-Fit Hood and Elastic Cuff Size
(LG/XL)", 129.95);

INSERT INTO products
    (id, product, price)
VALUES
    (3, "Nuka Cola Quantum
from Fallout Jones Soda | 1 Bottle", 14.99);

INSERT INTO products
    (id, product, price)
VALUES
    (4, "RiteBrew
- Gold Oxygen Absorbing Bottle Caps - 144 pcs", 7.08);

INSERT INTO products
    (id, product, price)
VALUES
    (5, "First Aid Only
299 Piece All-Purpose First Aid Kit, Soft Case", 16.82);

INSERT INTO products
    (id, product, price)
VALUES
    (6, "Campbell's Chicken Noodle Soup Microwavable Bowl, 15.4 oz. (Pack of 8)", 12.26);

INSERT INTO products
    (id, product, price)
VALUES
    (7, "Purina Friskies Wet
Cat Food Variety Pack", 12.84);

INSERT INTO products
    (id, product, price)
VALUES
    (8, "SOG Fixed Blade
Knives
with Sheath - SEAL Team Survival Knife, Tactical Knife & Hunting Knife w/ 7 Inch AUS-8 Bowie Knife Half Serrated Edge
(S37-K)", 115.17);

INSERT INTO products
    (id, product, price)
VALUES
    (9, "Bedsure Fleece Blanket
Throw Size Navy Lightweight Super Soft Cozy Luxury Bed Blanket Microfiber", 14.99);

INSERT INTO products
    (id, product, price)
VALUES
    (10, "
Amazon Brand
- Solimo 99% Isopropyl Alcohol First Aid Antiseptic For Technical
Use,16 Fluid Ounces", 3.05);