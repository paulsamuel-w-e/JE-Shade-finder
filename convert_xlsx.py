import pandas as pd
import json
import numpy as np

df = pd.read_excel("shades.xlsx")

# clean precot column
df["precot"] = df["precot"].astype(str).str.strip()
df.loc[df["precot"] == "nan", "precot"] = None

# format jayam codes safely
df["jayam"] = df["jayam"].apply(
    lambda x: str(int(x)).zfill(3) if pd.notna(x) else None
)

# replace pandas NaN with Python None
df = df.replace({np.nan: None})

# drop rows where BOTH values are empty
df = df.dropna(subset=["precot", "jayam"], how="all")

# check duplicates
dup_precot = df[df.duplicated("precot", keep=False) & df["precot"].notna()]
dup_jayam = df[df.duplicated("jayam", keep=False) & df["jayam"].notna()]

if not dup_precot.empty:
    print("\nWARNING: Duplicate PRECOT values found:")
    print(dup_precot)

if not dup_jayam.empty:
    print("\nWARNING: Duplicate JAYAM values found:")
    print(dup_jayam)

# optional: remove exact duplicate rows
df = df.drop_duplicates()

# convert to JSON records
data = df.to_dict(orient="records")

with open("shades.json", "w") as f:
    json.dump(data, f, indent=2)

print("\nJSON created:", len(data))