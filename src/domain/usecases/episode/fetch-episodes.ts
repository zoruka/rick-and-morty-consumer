import { API } from '@/domain/models/api';
import { Episode } from '../../models';

export interface FetchEpisodes {
	fetch(params: FetchEpisodes.Params): Promise<FetchEpisodes.Response>;
}

export namespace FetchEpisodes {
	export type Params = {
		ids: number[];
	};
	export type Response = API.Pagination<Episode.Model>;
}
