import { Action } from 'redux';
import { Store } from './store';

export interface DispatchAction extends Action<string> {
	payload: Partial<Store>;
}
