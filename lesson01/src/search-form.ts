import { renderBlock, dateToStr } from './lib.js'

export function renderSearchFormBlock (inDate?: Date, outDate?: Date) {
  const currentDate = new Date()
  const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
  const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0)
  const inDateDef = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)
  const outDateDef = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3)

  let inDateDefStr = {}
  if (inDate) {
    inDateDefStr = dateToStr(inDate)
  } else {
    inDateDefStr = dateToStr(inDateDef)
  }

  let outDateDefStr = {}
  if (outDate) {
    outDateDefStr = dateToStr(outDate)
  } else {
    outDateDefStr = dateToStr(outDateDef)
  }

  const minDateStr = dateToStr(minDate)
  const maxDateStr = dateToStr(maxDate)

  renderBlock(
    'search-form-block',
    `
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
    `
  )
}
