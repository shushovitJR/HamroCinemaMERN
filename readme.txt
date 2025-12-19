HamroCinemaMERN
================

Project Overview
----------------
HamroCinemaMERN is a full-stack movie booking web application (MERN) with a recommendation component. The repository contains a React + Vite client, an Express/Node.js server, MongoDB models, and a Python-based recommender used to provide movie suggestions.

Key Features
------------
- Browse movies, view details, and trailers.
- Book seats and manage bookings.
- Admin views for shows and bookings management.
- Recommendation engine for personalized suggestions.
- Stripe webhook handling for payments.

Tech Stack
----------
- Frontend: React, Vite, plain CSS
- Backend: Node.js, Express
- Database: MongoDB (Mongoose models)
- Recommender: Python (recommender.py)
- Payments: Stripe (webhook handler present)

Quick Start (Development)
-------------------------
Prerequisites: Node.js, npm (or yarn), Python 3, MongoDB

1. Install dependencies

   - Server
     - Open a terminal in the `server` folder and run:
       npm install

   - Client
     - Open a terminal in the `client` folder and run:
       npm install

2. Environment variables

   Create a `.env` file in `server/` with at least the following keys (names inferred from common usage in the repo):
   - MONGO_URI = your MongoDB connection string
   - JWT_SECRET = secret used for authentication
   - PORT = server port (default 5000)
   - STRIPE_SECRET = Stripe secret key (if using payments)
   - STRIPE_WEBHOOK_SECRET = Stripe webhook secret (if using webhooks)

3. Run the app

   - Start the server (from `server/`):
     npm run dev    # or `node server.js` depending on scripts

   - Start the client (from `client/`):
     npm run dev

4. (Optional) Recommender

   - The repository includes `recommender.py` (in the `server` root). It likely requires packages such as `pandas` and `scikit-learn`.
   - Create a Python virtual environment and install requirements, then run:
     python recommender.py

Folder Layout (high level)
--------------------------
- client/         - React frontend (Vite)
- server/         - Express server and API routes
  - configs/      - DB and other config helpers
  - controllers/  - Request handlers
  - middleware/   - Auth and other middleware
  - models/       - Mongoose models (User, Movie, Show, Booking)
  - routes/       - Express routes
  - recommender.py - Python recommendation script

Environment & Notes
-------------------
- Check `server/package.json` and `client/package.json` for exact npm script names; use `npm run dev` where available.
- The project uses Stripe webhook handling — when testing webhooks locally, use the Stripe CLI or configure your webhook endpoint.
- If you plan to run the recommender in production, containerizing or integrating it as a microservice is recommended.

Contributing
------------
- Fork, create a feature branch, add tests/changes, and open a pull request.

License
-------
Specify a license for the project (none included by default). Add a `LICENSE` file if you wish to apply a standard open-source license.

Contact
-------
For questions about this repository, inspect the `server` and `client` folders and open issues or pull requests with details.

