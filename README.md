# JE Shade Finder

A lightweight Progressive Web App (PWA) designed to simplify shade number lookups between **Jayam Enterprise internal shade codes** and **Precot shade codes** used when sourcing yarns.

This project was built to solve a **real operational problem** — replacing manual shade lookup methods (physical notes, spreadsheets, and phone-based Excel searches) with a **fast, simple, and mobile-friendly tool**.

The goal was not to build something for experimentation or boredom, but to **learn while solving an actual workflow challenge**, creating a practical **win-win outcome**: improving daily operations while exploring modern web technologies and data handling practices.

---

## Purpose

In textile sourcing workflows, different suppliers may use different shade numbering systems.
Jayam Enterprise maintains a mapping between:

* **Jayam shade numbers** (internal reference)
* **Precot shade numbers** (supplier reference)

Previously, these mappings were maintained in notebooks or Excel sheets, which made quick lookups inconvenient during daily operations.

This tool provides:

* ⚡ **Instant shade lookup**
* 📱 **Mobile-friendly interface**
* 🔍 **Incremental search with suggestions**
* 📦 **Offline functionality**
* 🧵 **Quick conversion between Jayam and Precot shade codes**

It is designed to be **simple enough for everyday use on a phone**, while still being robust and maintainable.

---

## Features

* **Incremental Search**

  * Typing partial codes lists similar shades instantly.

* **Exact Match Highlighting**

  * When an exact shade match exists, it is clearly displayed.

* **Clickable Suggestions**

  * Selecting a similar result autofills the search.

* **Offline Support**

  * Service Worker caching allows the app to function even without internet access.

* **Mobile-Friendly UI**

  * Clean layout optimized for quick use on phones.

* **Fast Lookup**

  * The dataset is loaded once and searched locally for near-instant responses.

---

## Data Pipeline

The dataset used by the app is generated from an Excel file maintained by the business.

Workflow:

```
Excel Shade List
        ↓
Python Data Cleaning Script
        ↓
JSON Dataset
        ↓
Offline Web App Lookup
```

The Python script performs:

* Data cleaning
* Handling missing values
* Formatting shade codes
* Duplicate detection
* Exporting to JSON for the web app

This keeps the system **simple, maintainable, and easy to update** whenever the shade list changes.

---

## Tech Stack

* **HTML**
* **CSS**
* **Vanilla JavaScript**
* **Progressive Web App (PWA)**
* **Service Workers for offline caching**
* **Python + Pandas** for dataset preparation

No external frameworks were used to keep the application **lightweight and easy to maintain**.

---

## Learning Outcome

This project served as a practical opportunity to explore:

* Building **Progressive Web Apps**
* Implementing **offline caching with service workers**
* Designing **simple and effective UI for real users**
* Creating a **data pipeline from Excel → JSON**
* Structuring small tools that solve **real operational problems**

Instead of building something abstract, the focus was on creating a **useful tool while learning through implementation**.

---

## Usage

1. Open the web app in a browser.
2. Select the shade type (**Jayam** or **Precot**).
3. Begin typing a shade number.
4. The tool instantly shows:

   * Exact match
   * Similar shades
5. Results can be tapped to autofill searches.

Once loaded, the app can also be **installed on mobile devices and used offline**.

---

## Project Goal

The intent of this repository is to demonstrate how **small, focused tools** can significantly improve everyday workflows while providing valuable hands-on learning in software development and system design.

---

## Author

**Paul Samuel W. E**
