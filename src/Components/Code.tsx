// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Code(props: any) {
  const style = {
    backgroundColor: '#eaeaea',
    padding: '1px 4px',
    borderRadius: '3px',
    ...props.style
  }
  return <code {...props} style={style} />
}

export default Code
