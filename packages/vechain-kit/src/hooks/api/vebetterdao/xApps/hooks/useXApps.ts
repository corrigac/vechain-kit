import { useQuery } from '@tanstack/react-query';
import { useConnex } from '@vechain/dapp-kit-react';
import { getXApps } from '../getXApps';
import { useVeChainKitConfig } from '@/providers';

export const getXAppsQueryKey = () => ['VECHAIN_KIT', 'getXApps'];

/**
 *  Hook to get all the available xApps in the B3TR ecosystem
 * @returns all the available xApps in the B3TR ecosystem capped to 256
 */
export const useXApps = () => {
    const { thor } = useConnex();
    const { network } = useVeChainKitConfig();

    return useQuery({
        queryKey: getXAppsQueryKey(),
        queryFn: async () => await getXApps(thor, network.type),
        enabled: !!thor && !!network.type,
    });
};
