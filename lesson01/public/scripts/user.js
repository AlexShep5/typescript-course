import { renderBlock } from './lib.js';
export function renderUserBlock(userName, userUrl, favoriteItemsAmount) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;
  renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${userUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxRQUFnQixFQUFFLE9BQWUsRUFBRSxtQkFBMkI7RUFDN0YsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtFQUNqRixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtFQUUzRCxXQUFXLENBQ1QsWUFBWSxFQUNaOztpQ0FFNkIsT0FBTyxVQUFVLFFBQVE7OzRCQUU5QixRQUFROztrQ0FFRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrICh1c2VyTmFtZTogc3RyaW5nLCB1c2VyVXJsOiBzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ6IG51bWJlcikge1xuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAn0L3QuNGH0LXQs9C+INC90LXRgidcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyB0cnVlIDogZmFsc2VcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHt1c2VyVXJsfVwiIGFsdD1cIiR7dXNlck5hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=