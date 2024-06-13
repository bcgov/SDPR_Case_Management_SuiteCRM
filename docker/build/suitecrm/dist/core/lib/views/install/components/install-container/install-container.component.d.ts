import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { InstallContentAdapter } from '../../adapters/install-content.adapter';
import { RecordContentDataSource } from '../../../../components/record-content/record-content.model';
import * as i0 from "@angular/core";
export declare class InstallContainerComponent {
    protected metadata: MetadataStore;
    protected contentAdapter: InstallContentAdapter;
    constructor(metadata: MetadataStore, contentAdapter: InstallContentAdapter);
    getContentAdapter(): RecordContentDataSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InstallContainerComponent, "scrm-install-container", never, {}, {}, never, never, false, never>;
}
