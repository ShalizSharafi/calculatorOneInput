# 🧮 Calculator — Single Input Calculator

A clean, minimal calculator built with vanilla JavaScript and Tailwind CSS. Features a single input display, full arithmetic operations, a power toggle, and dark mode support.

🔗 **Live Demo:** [shalizsharafi.github.io/calculatorOneInput](https://shalizsharafi.github.io/calculatorOneInput)

---

## ✨ Features

- **Single input display** — numbers and results shown in one clean field
- **Basic arithmetic** — addition, subtraction, multiplication, division
- **Power button** — toggles the calculator on/off, clears state when turned off
- **AC button** — clears the input and resets the current operation
- **Dark mode** — automatically adapts to the user's system theme
- **Responsive layout** — digit and operator grids reflow across mobile, tablet, and desktop

---

## 🛠️ Built With

- **HTML5**
- **Tailwind CSS** — utility-first styling with dark mode support
- **Vanilla JavaScript** — no frameworks, no libraries

---

## 📁 Project Structure

```
calculatorOneInput/
├── index.html
├── js/
│   └── master.js
└── stylesheet/
    └── out.css
```

---

## ⚙️ How It Works

The calculator uses two global variables to track state:

- `num1` — stores the first number after an operator is pressed
- `currentOp` — stores the current operator (`+`, `-`, `*`, `/`)

When `=` is pressed, a `switch` statement computes the result based on `currentOp` and displays it in the input field.

The **power button** uses a `data-status` attribute toggling between `on` and `off` to enable/disable the calculator and reset its state.

---

## 📸 Screenshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/481e2621-13f4-4d48-b038-01be5560623e" /></td>
    <td><img src="https://github.com/user-attachments/assets/30cf59a4-4c98-48e1-8e7b-56c40f7fd4e2" /></td>
  </tr>
  <tr>
    <td align="center">Dark Mode</td>
    <td align="center">Light Mode</td>
  </tr>
</table>

---

## 🚀 Getting Started

```bash
git clone https://github.com/shalizsharafi/calculatorOneInput.git
cd calculatorOneInput
open index.html
```

No build steps or dependencies required!

---

## 🙋‍♀️ About

Made by **Shaliz Sharafi** — built as a JavaScript practice project covering switch statements, DOM manipulation, state management with variables, and attribute toggling.

---

© 2026 Shaliz Sharafi — Made with ❤️ and JavaScript
