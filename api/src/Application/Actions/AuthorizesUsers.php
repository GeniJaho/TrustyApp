<?php

namespace App\Application\Actions;

use App\Domain\User\Craftsman;
use App\Domain\User\User;

trait AuthorizesUsers
{

    protected function getAuthCustomer(): ?User
    {
        if ($this->isGuest()) {
            return null;
        }

        $token = $this->request->getAttribute("token");

        $userId = (int) substr($token['user_id'], 8);

        return $this->userRepository->findUserOfId($userId);
    }

    protected function getAuthCraftsman(): ?Craftsman
    {
        if ($this->isGuest()) {
            return null;
        }

        $token = $this->request->getAttribute("token");

        $craftsmanId = (int) substr($token['user_id'], 9);

        return $this->craftsmanRepository->findCraftsmanOfId($craftsmanId);
    }

    protected function isCustomer(): bool
    {
        $token = $this->request->getAttribute("token");

        if (empty($token) || empty($token['user_id'])) {
            return false;
        }

        return strpos($token['user_id'], 'customer') === 0;
    }

    protected function isCraftsman(): bool
    {
        $token = $this->request->getAttribute("token");

        if (empty($token) || empty($token['user_id'])) {
            return false;
        }

        return strpos($token['user_id'], 'craftsman') === 0;
    }

    protected function isGuest(): bool
    {
        $token = $this->request->getAttribute("token");

        if (empty($token) || empty($token['user_id'])) {
            return true;
        }

        return false;
    }
}
