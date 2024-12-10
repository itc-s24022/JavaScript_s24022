var action_btn = document.getElementById('action_btn');
var counter = document.getElementById('counter');
var results = document.getElementById('results');
var count = 1;
var interval_id;

function start_game() {
  var btn_text = action_btn.innerHTML;

  if (btn_text === 'スタート') {
    action_btn.innerHTML = 'ストップ';

    interval_id = setInterval(function () {
      var li = document.createElement('li');
      if (count % 3 === 0) {
        var text = document.createTextNode('カウント:' + count + ' 結果: 成功');
      } else {
        var text = document.createTextNode('カウント:' + count + ' 結果: 失敗');
      }
      li.appendChild(text);
      results.appendChild(li);

      counter.innerHTML = count;
      count++;
    }, 200);
  } else if (btn_text === 'ストップ') {
    clearInterval(interval_id);
    action_btn.innerHTML = 'スタート';
    count = 1;
    counter.innerHTML = count;

    console.log('ストップボタンがクリックされたよ');
  }
}

action_btn.addEventListener('click', start_game);
