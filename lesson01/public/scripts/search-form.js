import { renderBlock, dateToStr } from './lib.js';
export function renderSearchFormBlock(inDate, outDate) {
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);
  const inDateDef = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
  const outDateDef = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3);
  let inDateDefStr = {};
  if (inDate) {
    inDateDefStr = dateToStr(inDate);
  }
  else {
    inDateDefStr = dateToStr(inDateDef);
  }
  let outDateDefStr = {};
  if (outDate) {
    outDateDefStr = dateToStr(outDate);
  }
  else {
    outDateDefStr = dateToStr(outDateDef);
  }
  const minDateStr = dateToStr(minDate);
  const maxDateStr = dateToStr(maxDate);
  renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${inDateDefStr}" min="${minDateStr}" max="${maxDateStr}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${outDateDefStr}" min="${minDateStr}" max="${maxDateStr}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFakQsTUFBTSxVQUFVLHFCQUFxQixDQUFFLE1BQWEsRUFBRSxPQUFjO0VBQ2xFLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7RUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtFQUNsRyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtFQUNsRixNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtFQUN4RyxNQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtFQUV6RyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUE7RUFDckIsSUFBSSxNQUFNLEVBQUU7SUFDVixZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0dBQ2pDO09BQU07SUFDTCxZQUFZLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0dBQ3BDO0VBRUQsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO0VBQ3RCLElBQUksT0FBTyxFQUFFO0lBQ1gsYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtHQUNuQztPQUFNO0lBQ0wsYUFBYSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtHQUN0QztFQUVELE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtFQUNyQyxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7RUFFckMsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVU7Ozs7NERBSW5ELGFBQWEsVUFBVSxVQUFVLFVBQVUsVUFBVTs7Ozs7Ozs7Ozs7O0tBWTVHLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jaywgZGF0ZVRvU3RyIH0gZnJvbSAnLi9saWIuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2sgKGluRGF0ZT86IERhdGUsIG91dERhdGU/OiBEYXRlKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICBjb25zdCBtaW5EYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgY3VycmVudERhdGUuZ2V0RGF0ZSgpKVxuICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDIsIDApXG4gIGNvbnN0IGluRGF0ZURlZiA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEpXG4gIGNvbnN0IG91dERhdGVEZWYgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCBjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAzKVxuXG4gIGxldCBpbkRhdGVEZWZTdHIgPSB7fVxuICBpZiAoaW5EYXRlKSB7XG4gICAgaW5EYXRlRGVmU3RyID0gZGF0ZVRvU3RyKGluRGF0ZSlcbiAgfSBlbHNlIHtcbiAgICBpbkRhdGVEZWZTdHIgPSBkYXRlVG9TdHIoaW5EYXRlRGVmKVxuICB9XG5cbiAgbGV0IG91dERhdGVEZWZTdHIgPSB7fVxuICBpZiAob3V0RGF0ZSkge1xuICAgIG91dERhdGVEZWZTdHIgPSBkYXRlVG9TdHIob3V0RGF0ZSlcbiAgfSBlbHNlIHtcbiAgICBvdXREYXRlRGVmU3RyID0gZGF0ZVRvU3RyKG91dERhdGVEZWYpXG4gIH1cblxuICBjb25zdCBtaW5EYXRlU3RyID0gZGF0ZVRvU3RyKG1pbkRhdGUpXG4gIGNvbnN0IG1heERhdGVTdHIgPSBkYXRlVG9TdHIobWF4RGF0ZSlcblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7aW5EYXRlRGVmU3RyfVwiIG1pbj1cIiR7bWluRGF0ZVN0cn1cIiBtYXg9XCIke21heERhdGVTdHJ9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtvdXREYXRlRGVmU3RyfVwiIG1pbj1cIiR7bWluRGF0ZVN0cn1cIiBtYXg9XCIke21heERhdGVTdHJ9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApXG59XG4iXX0=