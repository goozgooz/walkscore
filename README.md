# HealthSlate WalkScore Study
## Setup Steps
### 1. Create .env  file with the following
- `WALKSCORE_KEY`
- `MAPQUEST_KEY`
- `PLOTLY_KEY`
### 2. Add .csv file with data into root folder
### 3. From command line run `node index.js [your-filename].csv`

## Program Output
### `R-Squared` 
#### Terminal will console.log for you the R-Squared coeffeicient. 
#### It will range from 0-1.  0 being no coorelation whatsoever, 1 being perfectly coorelated. 
### `[your-filename]-result.csv` 
#### a new .csv file which is a copy of the given .csv file + a column with WalkScores
### `[your-filename]-chart.png` 
#### a Scatter Plot with WalkScores (x-axis) compared with their corresponding Weight Loss % (y-axis)
