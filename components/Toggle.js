const e = React.createElement;
class Toggle extends React.Component {
  render() {
    return e(
      'button',
      {onClick: removeFrame}
    );
  }
}

function removeFrame(){
  const iframe = document.getElementById("iframe")
  iframe.remove()
}

const container = document.getElementById("buttonContainer")
ReactDOM.render(e(Toggle), container);