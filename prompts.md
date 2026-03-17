---
The application we are building is intended to track expenses (household budget), broken down by specific months and years. Adding expenses should be possible within a specific category (e.g., Food,    
Bills, Transport, Mortgage, Health, etc.). Categories should be managed separately. When adding an expense, the user provides the expense name, date (year, month, day), category, and amount. Prepare    
an initial design of the main application page by modifying the @src/routes/index.tsx file, where a summary per month or year will be displayed along with a chart. On the top there should be also a     
way to switch between year and month view. The year view should have bar chart showing expenses grouped by category month after month and in monthly view there should be chart with spending by
category. On the bottom there should be list of recent expenses for given month. Extend the CLAUDE.md file with a business description of the application. Add feature on separate branch.
---
Please also add initial database schema types, remove the existing todo as it won't be used in this project anymore
---
The amount should be a separated type Money which has amount and currency (keep PLN as default one but in the future would like to have possibility to select currency by user) 
---
Please in the place marked with orange box add button to new expense with current month
---
Add a subpage that allows to manage categories (please remember category can be deleted only if no expenses are connected to that category). Please integrate actions like add category, modify category name, color and remove category with database. Put also existing mock categories into database (using devdb-mcp-server). For integration use tanstack start server functions (check documentation using context7) 
---
Plan a implementation of expenses management. The new expense button should allow to add new expense (using the current date). Also for e selected month there should be a subpage with list of expenses where user can modify or delete the expense. Also migrate all the existing mock expenses into database (using devdb-mcp-server). For integration use tanstack start server functions.
---
Please review current code for design and security in the same time. Generate summary what can be improved.
---
Run agent team to review code for design and security
---
You are devops expert. Create GitHub action to run the tests of current project. The tests should run for each merge request and main branch. You can add also other ci suggested stages.