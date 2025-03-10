import {
    Button,
    Link,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Text,
    VStack,
    Icon,
    HStack,
    Heading,
    Tag,
    Select,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
    ModalBackButton,
    ScrollToTopWrapper,
    StickyHeaderContainer,
} from '@/components/common';
import { useVeChainKitConfig } from '@/providers';
import { VechainLogoHorizontal } from '@/assets';
import { FAQAccordion } from './FAQAccordion';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, languageNames } from '../../../../../i18n';

type Props = {
    onGoBack: () => void;
};

export const FAQContent = ({ onGoBack }: Props) => {
    const { network, darkMode: isDark } = useVeChainKitConfig();
    const { i18n, t } = useTranslation();

    return (
        <ScrollToTopWrapper>
            <StickyHeaderContainer>
                <ModalHeader
                    fontSize={'md'}
                    fontWeight={'500'}
                    textAlign={'center'}
                    color={isDark ? '#dfdfdd' : '#4d4d4d'}
                >
                    {t('Info')}
                </ModalHeader>
                <ModalBackButton onClick={onGoBack} />
                <ModalCloseButton />
            </StickyHeaderContainer>

            <ModalBody>
                <VStack spacing={6} align="stretch">
                    <VStack>
                        <HStack justify={'center'}>
                            <VechainLogoHorizontal
                                isDark={isDark}
                                w={'200px'}
                            />
                        </HStack>
                        <Text fontSize="sm" opacity={0.7} textAlign={'center'}>
                            {t(
                                'Welcome! Here you can manage your wallet, send tokens, and interact with the VeChain blockchain and its applications.',
                            )}
                        </Text>
                    </VStack>

                    <HStack justify={'center'} spacing={2}>
                        <Tag
                            size={'sm'}
                            colorScheme={'blue'}
                            width={'fit-content'}
                            justifyContent={'center'}
                            padding={'10px'}
                        >
                            {t('Network')}: {network.type}
                        </Tag>
                        <Select
                            borderRadius={'md'}
                            size="sm"
                            width="auto"
                            value={i18n.language}
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                            bg={isDark ? 'whiteAlpha.200' : 'gray.100'}
                            borderColor={isDark ? 'whiteAlpha.300' : 'gray.200'}
                            _hover={{
                                borderColor: isDark
                                    ? 'whiteAlpha.400'
                                    : 'gray.300',
                            }}
                        >
                            {supportedLanguages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {
                                        languageNames[
                                            lang as keyof typeof languageNames
                                        ]
                                    }
                                </option>
                            ))}
                        </Select>
                    </HStack>

                    <Heading
                        fontSize={'md'}
                        fontWeight={'500'}
                        textAlign={'center'}
                        mt={4}
                        mb={1}
                    >
                        {t('Frequently asked questions')}
                    </Heading>

                    <FAQAccordion />

                    <Button
                        as={Link}
                        href="https://docs.vechain-kit.vechain.org/"
                        isExternal
                        variant="outline"
                        rightIcon={<Icon as={FaExternalLinkAlt} />}
                        size="lg"
                        height="60px"
                        mt={4}
                    >
                        {t('For developers')}
                    </Button>
                </VStack>
            </ModalBody>
        </ScrollToTopWrapper>
    );
};
