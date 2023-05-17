import { StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '99.5vh',
    border: 'none'
  },
  page: {
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
  },
  sectionTitle: {
    textTransform: 'uppercase',
    fontSize: '10px',
    marginBottom: '10px',
    opacity: 0.6
  },
  item: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '14px',
    marginBottom: '3px'
  },
  itemBreak: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '12px',
    opacity: 0.6
  },
  date: {
    fontSize: '9px',
    marginBottom: '3px',
    opacity: 0.6
  },
  text: {
    fontSize: '11px',
    marginBottom: '7px',
    maxWidth: '350px'
  },
  primaryLink: {
    marginBottom: '5px',
    fontSize: '10px',
    color: '#333'
  },
  links: {
    marginBottom: '7px',
    flexDirection: 'row'
  },
  link: {
    fontSize: '9px',
    marginRight: '5px',
    color: '#333'
  },
  tag: {
    fontSize: '9px',
    marginRight: '5px',
    borderWidth: 1,
    borderColor: '#333',
    padding: '2px 3px 1px',
    borderRadius: '5px',
    opacity: 0.6
  },
  tags: {
    flexDirection: 'row'
  },
  about: {},
  about_title: {
    fontSize: '25px',
    marginBottom: '5px',
    maxWidth: '350px'
  },
  about_subtitle: {
    fontSize: '14px',
    marginBottom: '5px',
    maxWidth: '350px'
  },
  about_resume: {
    fontSize: '11px',
    marginBottom: '25px',
    maxWidth: '350px'
  },
  about_text: {
    fontSize: '11px',
    marginBottom: '15px',
    maxWidth: '350px'
  }
})

export default styles
