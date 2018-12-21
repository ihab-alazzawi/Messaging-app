## React Coding Challenge

This code challenge tests your skills in react js, testing and modular design. The purpose of the application is to correctly render a stream of messages coming from an api. Different messages will be coded different colors and require slightly different rendering. The rules are described in detail below.

### Rules

1. Messages should be rendered in a grid like structure with a color code distinction depending on the priority of the message. The newest rules on top of the grid
2. The 3 priorities that we support are:
  * 1 = alert (should be few and far between, no more than 10% of all messages)
  * 2 = warning (20% - 40% of all message traffic)
  * 3 = info (60% - 80% of all message traffic)
3. The colors to use are #F56236 for alert, #FCE788 for warning and #88FCA3 for info.
4. Alert messages should also appear in the top as a floating error that disappears in 2 seconds or another alert message takes its place.
5. A user should be able to clear the grid of all messages.

### Styling

You can inline style or use the main.css style sheet included which is already included.

### Testing

If you have time we would like to see your testing strategy. We use tape and have a testing harness mocked out.