import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  titleWrapper: {
    alignItems: 'center', // Center title horizontally
    marginBottom: 20, // Add space below the title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#BBDEFB',
    borderRadius: 5,
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    color: '#0D47A1',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 5,
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    alignItems: 'center',
  },  
});

export default styles;
