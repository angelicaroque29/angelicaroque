# Case study: structural concrete contractor

Route: `/en/cases/structural-contractor`
Share title: Your estimate looks perfect. That's the problem.
Share description: How we found nine silent errors in a structural contractor's estimating template, and what we're building so they don't come back.

---

## Hero

**Title:** Your estimate looks perfect. That's the problem.

**Subtitle:** We audited a structural concrete contractor's estimating template, found nine errors that gave no warning, and started connecting estimating, cost control and payments into one system.

**Primary button:** Review my template
**Secondary button:** See what we found (scrolls to What we found)

---

## The client

A structural concrete contractor working on residential and commercial projects. For confidentiality, we don't publish their name. We'd do the same for your company.

---

## The situation

Like most contractors, the company runs on Excel: an estimating template with dozens of sheets, thousands of formulas and macros; one file for cost control; another for paying subcontractors.

Each file worked on its own, but they didn't talk to each other. Data moved between them by copy and paste, and several copies of the template were in circulation with no way to tell which one was official.

[Diagram: assets/systems-map.en.svg]

---

## What we found

[Interactive demo: Find the error]

We audited the template against a real, fully priced estimate and found nine defects. A few examples:

- **A whole phase left out of the total.** Its costs reached the detail lines but never the total cost. Any project with that phase would be priced below what it actually costs.
- **A section of the building with no labor.** The labor total skipped an entire section.
- **Materials read from the wrong phase.** Two phases pulled their quantities from another phase.
- **A space that counts as zero.** A single blank space in a cell zeroed out the labor on a member. No red error: the summary looked clean.
- **Duplicate codes.** Two line items shared the same code.

On the estimate we reviewed, none of them was costing money yet, because that project didn't use those phases. On the next one that does, the numbers would come out wrong without warning.

---

## How we're fixing it

It's a staged process. Every stage leaves the team with something it can already use.

1. **Diagnosis.** Review every system and audit the template against a real estimate.
2. **Immediate fixes.** Correct the formulas, validate input data and flag any negative margin in red.
3. **One ID per project.** The same customer and project code travels from the estimate to the proposal, cost control and payments.
4. **Cost control from the estimate.** Each project's budget comes straight from the winning estimate, with no retyping.
5. **New calculation engine.** Separate quantity calculations from pricing, with factor tables the team can edit.
6. **One official version.** A single central file with version history.

(Each step's status comes from `data.json`.)

---

## Also

We organized the company's documentation into a library sorted by system and set up an AI assistant that answers questions about how the company works, using those documents. Knowledge no longer depends on who happens to be in the office that day.

---

## Sound familiar?

- You estimate in Excel, with macros only one person understands.
- More than one version of the template is going around.
- Cost control gets built by hand after you win the job.
- Subcontractor payments live in a separate file.
- Nobody reviews the template until a job loses money.

---

## Closing

**Title:** Send me your template. I'll tell you what I find.

**Text:** I'll review your estimating template or a recent estimate and give you a list of what's changing your numbers without warning. Your information stays with me, just like this client's.

**Button:** Book 20 minutes
