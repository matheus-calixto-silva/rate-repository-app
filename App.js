import { registerRootComponent } from 'expo';
import Main from './src/components/Main';

export default function App() {
  return <Main />;
}

registerRootComponent(App);
