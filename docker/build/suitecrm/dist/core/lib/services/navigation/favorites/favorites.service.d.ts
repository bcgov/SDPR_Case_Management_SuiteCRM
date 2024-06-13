import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { Favorite } from 'common';
import { ProcessService } from '../../process/process.service';
import * as i0 from "@angular/core";
export declare class FavoritesService {
    protected metadata: MetadataStore;
    protected processService: ProcessService;
    constructor(metadata: MetadataStore, processService: ProcessService);
    /**
     * Public Api
     */
    /**
     * Build new favorite
     * @param module
     * @param id
     */
    build(module: string, id: string): Favorite;
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    add(module: string, favorite: Favorite): void;
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    remove(module: string, favorite: Favorite): void;
    /**
     * Save favorite to backend
     * @param module
     * @param favorite
     * @param action
     */
    protected update(module: string, favorite: Favorite, action: string): void;
    /**
     *
     * @param savedFavorite
     * @param module
     * @private
     */
    protected addFavoriteToMetadata(savedFavorite: Favorite, module: string): void;
    /**
     * Remove favorite from metadata
     * @param module
     * @param favorite
     */
    protected removeFavoriteFromMetadata(module: string, favorite: Favorite): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FavoritesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FavoritesService>;
}
