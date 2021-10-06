const Stack = require('./Stack');
const test_output = require('../utils/test_output');

const st = new Stack(['A','B','C']);
test_output(`return C as top: ${st.items}`, 'C', st.top);

const removed = st.pop();
test_output(`return C after pop: ${st.items}`, 'C', removed);

st.push('D');
test_output(`push D: ${st.items}`, 'D', st.items[st.items.length - 1]);

st.pop();
st.pop();
st.pop();
test_output(`return empty: ${st.items}`, true, st.isEmpty());